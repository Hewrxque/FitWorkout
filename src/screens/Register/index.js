import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
        </TouchableOpacity>

        <Image style={styles.image} source={Logo} />
        <View style={{paddingTop: 100}}>
          <View><Text style={styles.text2}>Nome de Usuário</Text></View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Digite um nome de usuário"
            />
          </View>
          <View><Text style={styles.text2}>Email</Text></View>
          <View>
            
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={email}
              onChangeText={handleCheckEmail}
            />
          </View>
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Digite um email válido</Text>
          ) : (
            <Text style={{color: 'red'}}></Text>
          )}
         <View><Text style={styles.text2}>Senha</Text></View>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua Senha"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}>
              <Icon
                name={seePassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={'#ffffff'}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 60}}>
            <View style={{alignItems: 'center'}}>
              {email == '' || password == '' || checkValidEmail == true ? (
                <TouchableOpacity disabled style={styles.button}>
                  <Text style={styles.text}>Realizar Cadastro</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>Realizar Cadastro</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
