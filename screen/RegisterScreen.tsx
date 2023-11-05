import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Colors } from '../constants/colors';
import { useCallback, useState } from 'react';
import OutlineButton from '../components/UI/OutlineButton';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ mode: 'onChange' });

  const [registerFor, setRegisterFor] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedContactNumber, setIsFocusedContactNumber] = useState(false);

  const [isFocusedFullName, setIsFocusedFullName] = useState(false);
  const [isFocusedDesignation, setIsFocusedDesignation] = useState(false);
  const [isFocusedCompany, setIsFocusedCompany] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedCheckPassword, setIsFocusedCheckPassword] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const [genderOpen, setGenderOpen] = useState(false);
  const [officeOpen, setOfficeOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [officeValue, setOfficeValue] = useState(null);
  const [gender, setGender] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);
  const [companyList, setCompanyList] = useState([
    { companyName: 'Office1', id: 'Office1' },
    { companyName: 'Office2', id: 'Office2' },
    { companyName: 'Office3', id: 'Office3' },
  ]);
  const onGenderOpen = useCallback(() => {
    setOfficeOpen(false);
  }, []);
  const onOfficeOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleUserType = (userType: any) => {
    setRegisterFor(userType);
    handleClose();
  };

  //Full Name
  const handleFocusFullName = () => {
    setIsFocusedFullName(true);
  };

  const handleBlurFullName = () => {
    setIsFocusedFullName(false);
  };

  //Designation
  const handleFocusDesignation = () => {
    setIsFocusedDesignation(true);
  };

  const handleBlurDesignation = () => {
    setIsFocusedDesignation(false);
  };

  //Admin Company Designation
  const handleFocusCompany = () => {
    setIsFocusedCompany(true);
  };

  const handleBlurCompany = () => {
    setIsFocusedCompany(false);
  };

  //Email

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };

  //Contact Number
  const handleFocusContactNumber = () => {
    setIsFocusedContactNumber(true);
  };

  const handleBlurContactNumber = () => {
    setIsFocusedContactNumber(false);
  };

  //Password
  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };
  const handleFocusCheckPassword = () => {
    setIsFocusedCheckPassword(true);
  };

  const handleBlurCheckPassword = () => {
    setIsFocusedCheckPassword(false);
  };

  const onSubmit = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      keyboardShouldPersistTaps='handled'
      style={styles.container}
    >
      <KeyboardAvoidingView style={styles.container} enabled behavior='padding'>
        <View style={styles.loginContainer}>
          <View>
            <Text style={styles.registration}>
              Registration for{' '}
              <Text style={{ color: 'red' }}>*{registerFor}</Text>
            </Text>
          </View>

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  isFocusedFullName && styles.focusedTextInput,
                ]}
                placeholder='*Full name'
                onBlur={() => {
                  onBlur();
                  handleBlurFullName();
                }}
                onChangeText={onChange}
                value={value}
                onFocus={handleFocusFullName}
                textAlign='center'
                inputMode='text'
              />
            )}
            name='fullName'
          />
          {errors.fullName && (
            <Text style={{ color: 'red' }}>*Full name is required.</Text>
          )}

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  isFocusedDesignation && styles.focusedTextInput,
                ]}
                placeholder='*Designation'
                onBlur={() => {
                  onBlur();
                  handleBlurDesignation();
                }}
                onChangeText={onChange}
                value={value}
                onFocus={handleFocusDesignation}
                textAlign='center'
                inputMode='text'
              />
            )}
            name='designation'
          />
          {errors.designation && (
            <Text style={{ color: 'red' }}>*Designation is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

                // /^[+-]?\d{1,18}(\.\d{1,2})?$/,
                // /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
                message: 'Please enter a valid Email',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  isFocusedEmail && styles.focusedTextInput,
                ]}
                placeholder='*email@lged.gov.bd'
                onBlur={() => {
                  onBlur();
                  handleBlurEmail();
                }}
                onChangeText={onChange}
                value={value}
                onFocus={handleFocusEmail}
                textAlign='center'
                inputMode='email'
                keyboardType='email-address'
              />
            )}
            name='email'
          />
          {errors.email && (
            <Text style={{ color: 'red' }}>*Email is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^([+]\d{2})?\d{11}$/,

                // /^[+-]?\d{1,18}(\.\d{1,2})?$/,
                // /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
                message: 'Please enter a valid contact number',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  isFocusedContactNumber && styles.focusedTextInput,
                ]}
                placeholder='*Contact Number'
                onBlur={() => {
                  onBlur();
                  handleBlurContactNumber();
                }}
                onChangeText={onChange}
                value={value}
                onFocus={handleFocusContactNumber}
                textAlign='center'
                inputMode='decimal'
              />
            )}
            name='contactNumber'
          />
          {errors.contactNumber && (
            <Text style={{ color: 'red' }}>
              *Please enter a valid contact number
            </Text>
          )}
          <Controller
            name='gender'
            defaultValue=''
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <View style={styles.dropdownGender}>
                <DropDownPicker
                  style={styles.dropdown}
                  open={genderOpen}
                  value={genderValue} //genderValue
                  items={gender}
                  setOpen={setGenderOpen}
                  setValue={setGenderValue}
                  setItems={setGender}
                  placeholder='*Select Gender'
                  placeholderStyle={styles.placeholderStyles}
                  onOpen={onGenderOpen}
                  onChangeValue={onChange}
                  zIndex={3000}
                  zIndexInverse={1000}
                  labelStyle={{ textAlign: 'center' }}
                  listMode='MODAL'
                />
              </View>
            )}
          />
          {errors.gender && (
            <Text style={{ color: 'red' }}>*Gender is required.</Text>
          )}
          {registerFor === 'User' ? (
            <>
              <Controller
                name='office'
                defaultValue=''
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <View style={styles.dropdownGender}>
                    <DropDownPicker
                      dropDownDirection={
                        Platform.OS === 'ios' ? 'TOP' : 'BOTTOM'
                      }
                      style={styles.dropdown}
                      open={officeOpen}
                      value={officeValue}
                      items={companyList.map((item) => ({
                        label: item.companyName,
                        value: item.companyName,
                      }))}
                      setOpen={setOfficeOpen}
                      setValue={setOfficeValue}
                      placeholder='*Office/Unit/Project List'
                      placeholderStyle={styles.placeholderStyles}
                      onOpen={onOfficeOpen}
                      onChangeValue={onChange}
                      zIndex={3000}
                      zIndexInverse={1000}
                      dropDownContainerStyle={{
                        height: 150,
                        backgroundColor: '#dafafa',
                      }}
                      listItemContainerStyle={{
                        height: 30,
                      }}
                      labelStyle={{ textAlign: 'center' }}
                      listMode='SCROLLVIEW'
                    />
                  </View>
                )}
              />
              {errors.office && (
                <Text style={{ color: 'red' }}>*Office is required.</Text>
              )}
            </>
          ) : (
            <>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      isFocusedCompany && styles.focusedTextInput,
                    ]}
                    placeholder='*Office/Unit/Project Name'
                    onBlur={() => {
                      onBlur();
                      handleBlurCompany();
                    }}
                    onChangeText={onChange}
                    value={value}
                    onFocus={handleFocusCompany}
                    textAlign='center'
                    inputMode='text'
                  />
                )}
                name='company'
              />
              {errors.designation && (
                <Text style={{ color: 'red' }}>*Office is required.</Text>
              )}
            </>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{6,12}$)/,
                message: 'Please enter a valid password',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={{ width: '90%' }}>
                <TextInput
                  style={[
                    styles.inputPassword,
                    isFocusedPassword && styles.focusedTextInput,
                  ]}
                  placeholder='Enter a Password'
                  autoCorrect={false}
                  secureTextEntry={!showPassword} // Toggle secure text entry based on the state
                  value={value}
                  onBlur={() => {
                    onBlur();
                    handleBlurPassword();
                  }}
                  onChangeText={(text) => {
                    onChange(text);
                    setPassword(text);
                  }}
                  onFocus={handleFocusPassword}
                  textContentType='password'
                  textAlign='center'
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 15,
                  }}
                  onPress={togglePasswordVisibility}
                >
                  <Ionicons
                    style={styles.icon}
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={18}
                    color={Colors.primary500}
                  />
                  {/* <Text>{showPassword ? 'Hide' : 'Show'} Password</Text> */}
                </TouchableOpacity>
              </View>
            )}
            name='password'
          />
          {errors.password && (
            <Text style={{ color: 'red' }}>*Please enter a valid password</Text>
          )}
          <TextInput
            selectionColor='black'
            placeholderTextColor='#9097a6'
            style={[styles.input, isFocusedPassword && styles.focusedTextInput]}
            onChangeText={(text) => setCheckPassword(text)}
            value={checkPassword}
            placeholder='*Confirm your Password'
            onFocus={handleFocusCheckPassword}
            onBlur={handleBlurCheckPassword}
            textAlign='center'
            secureTextEntry={!showPassword} //for password only
          />
          {checkPassword && password !== checkPassword ? (
            <Text style={{ color: 'red' }}>*Password doesn't match!</Text>
          ) : null}

          <View style={{ marginTop: 20 }}>
            <OutlineButton
              backgroundColor='#9C27B0'
              direction='left'
              isButtonPressed={isButtonPressed}
              icon='save-sharp'
              onPress={handleSubmit(onSubmit)}
            >
              REGISTER
            </OutlineButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  modalSubHeader: {
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
    margin: 0,
    padding: 24,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topHeading: {
    fontWeight: 'bold',
    color: '#077113',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  welcome: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
  },
  registration: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  subHeading: {
    marginBottom: 30,
    color: '#828893',
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: '#E8F0FE',
    borderRadius: 4,
    width: '90%',
  },
  inputPassword: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: '#E8F0FE',
    borderRadius: 4,
    width: '100%',
  },
  focusedTextInput: {
    borderColor: '#007aff', // Focused border color
  },
  bottomContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 8,
    justifyContent: 'flex-end',
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: '90%',
    marginVertical: 5,
  },
  dropdown: {
    borderColor: '#262525',
    height: 50,
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '#E8F0FE',
    borderRadius: 4,
  },
  placeholderStyles: {
    color: '#605f5f',
    textAlign: 'center',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
    color: 'black',
    marginTop: 2,
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  imagePreview: {
    width: 180,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#078da8',
    overflow: 'hidden',
  },
});
