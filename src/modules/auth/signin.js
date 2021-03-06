
import React, {Component} from 'react';
import {Screen, View} from '@shoutem/ui';
import {
  Animated, Keyboard, Platform,
  KeyboardAvoidingView
} from 'react-native';
import {connect} from 'react-redux';
import Form from '../shared/form';
import {LOGIN_FORM} from '../shared/form/config';
import {bindFunctions} from '../../utils';
import {loginReq} from './action';
import {getLogin} from './store';

class Signin extends Component {
  constructor (props) {
    super(props);
    bindFunctions.call(this, [
      '_logoResize', '_login',
      '_onKbrdShow', '_onKbrdHide'
    ]);

    this.logoDim = new Animated.Value(100);
    this.radius = new Animated.Value(50);
    this.kbrdShow = Keyboard.addListener('keyboardDidShow', this._onKbrdShow);
    this.kbrdHide = Keyboard.addListener('keyboardDidHide', this._onKbrdHide);
  }

  componentWillUnmount () {
    this.kbrdShow.remove();
    this.kbrdHide.remove();
  }

  _logoResize (isKbrdOpen) {
    Animated.timing(
      this.logoDim,
      {
        toValue: isKbrdOpen ? 50 : 100,
        duration: 300
      }
    ).start();
    Animated.timing(
      this.radius,
      {
        toValue: isKbrdOpen ? 25 : 50,
        duration: 300
      }
    ).start();
  }

  _onKbrdShow () {
    this._logoResize(true);
  }

  _onKbrdHide () {
    this._logoResize(false);
  }

  _login (obj) {
    Keyboard.dismiss();
    this.props.dispatch(loginReq(obj));
  }

  render () {
    const {login} = this.props;
    return (
      <Screen styleName='paper'>
        <View style={{flex: 11}}>
          <KeyboardAvoidingView
            {...Platform.select({ios: {behavior: 'padding'}, android: {}})}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <View styleName='vertical h-center v-center' style={{flex: 1, paddingBottom: 30}}>
              <Animated.Image
                style={{
                  alignSelf: 'center',
                  height: this.logoDim,
                  width: this.logoDim,
                  borderRadius: this.radius
                }}
                source={require('../../images/logo.png')}
              />
            </View>
            <View styleName='vertical h-center' style={{flex: 2}}>
              <Form
                key={LOGIN_FORM.name}
                loading={login.loading}
                onSubmit={this._login}
                config={LOGIN_FORM}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Screen>
    );
  }
}

const stateToProps = state => ({
  login: getLogin(state)
});

export default connect(stateToProps, dispatch => ({dispatch}))(Signin);
