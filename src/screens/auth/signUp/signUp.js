import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/colors';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {hp, wp} from '../../../services/dimensions';
import {styles} from './style';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [conformPassword, setConformPassword] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('SocialLogin')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <Text style={styles.signuptxt}>Sign Up</Text>
        <Text style={styles.logintxt}>
          Fill these details to sign up or
          <Text
            onPress={() => navigation.navigate('LogIn')}
            style={{color: colors.colorButton}}>
            {' '}
            Log in here
          </Text>
        </Text>
        <SimpleTextinput
          onChangeText={setFullName}
          value={fullName}
          containerStyle={{marginTop: hp(49)}}
          placeholder="First Name"
        />
        <SimpleTextinput
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last Name"
        />
        <SimpleTextinput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <SimpleTextinput
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder="Mobile Number"
        />
        <SimpleTextinput
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
        <SimpleTextinput
          onChangeText={setConformPassword}
          value={conformPassword}
          secureTextEntry
          containerStyle={{marginBottom: wp(69)}}
          placeholder="Conform Password"
        />
        <SimpleButton
          onPress={() => navigation.navigate('NumberVerification')}
          title="Sign Up"
        />
      </ScrollView>
    </View>
  );
};
export default SignUp;
