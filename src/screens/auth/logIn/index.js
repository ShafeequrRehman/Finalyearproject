import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/colors';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
const LogIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('NumberVerification')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <Text style={styles.signuptxt}>Log In</Text>
        <Text style={styles.logintxt}>
          Fill these details to log in or
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{color: colors.colorButton}}>
            {' '}
            Sign up here
          </Text>
        </Text>
        <SimpleTextinput
          onChangeText={setEmail}
          value={email}
          containerStyle={styles.txtinput}
          placeholder="Email"
        />
        <SimpleTextinput
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgottxt}>
          Forgot Password?
        </Text>
        <SimpleButton
          onPress={() => navigation.navigate('Location')}
          title="Log In"
          style={styles.loginbtn}
        />
        <View style={styles.OrmainView}>
          <LinearGradient
            colors={['#F1F1F1', '#D9D9D9']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
          />
          <Text style={styles.orText}>OR</Text>
          <LinearGradient
            colors={['#D9D9D9', '#F1F1F1']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
          />
        </View>
        <SimpleButton icon="Google" title="Google" style={styles.googlebtn} />
        <SimpleButton
          icon="Facebook"
          title="Facebook"
          style={styles.facebookbtn}
        />
      </ScrollView>
    </View>
  );
};
export default LogIn;
