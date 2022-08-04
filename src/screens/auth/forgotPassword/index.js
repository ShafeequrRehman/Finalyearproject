import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {styles} from './style';
const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.signuptxt}>Forgot Password</Text>
      <Text style={styles.logintxt}>
        Enter the email address associated with your account
      </Text>
      <SimpleTextinput
        onChangeText={setEmail}
        value={email}
        containerStyle={styles.txtinput}
        placeholder="Email"
      />
      <Text
        onPress={() => navigation.navigate('ForgotPasswordwithNumber')}
        style={styles.wantTxt}>
        Want to get code on mobile number?
      </Text>
      <SimpleButton
        onPress={() =>
          navigation.navigate('CodeVerification', {check: 'email'})
        }
        title="Send"
        style={styles.sendbtn}
      />
    </View>
  );
};
export default ForgotPassword;
