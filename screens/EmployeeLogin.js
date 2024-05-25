import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/style'

// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';

const {darkLight, brand, primary} = Colors;

import { View,ActivityIndicator } from 'react-native';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

import axios from 'axios';

const Login = ({navigation}) => {


    const [hidePassword, setHidePassword] = useState(true)
    const [message,setMessage] = useState()
    const [messageType,setMessageType] = useState()

    const handleLogin = (credentials,setSubmitting) =>{
        handleMessage(null)
        const url = "http://loginserverfireprevention-env.eba-p4ftevhp.ap-south-1.elasticbeanstalk.com/user/signin";

        axios
        .post(url,credentials)
        .then((response)=>{
            const result = response.data;
            const {message,status,data}=result

            if(status !== "SUCCESS"){
                handleMessage(message,status)
            }else{
                navigation.navigate("HomeNavigation",{params : {...data[0]}})
            }
            setSubmitting(false)
        })
        .catch(error=>{
            console.log(error);
            handleMessage("An error occured, Please check your internet connection!")
            setSubmitting(false)
        })
    }

    const handleMessage = (message,type="FAILED")=>{
        setMessage(message)
        setMessageType(type)
    }

    // const handleGoogleSignin =()=>{
    //     GoogleSignin.configure({
    //         scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //       });

    //       signIn = async () => {
    //         try {
    //           await GoogleSignin.hasPlayServices();
    //           const userInfo = await GoogleSignin.signIn();
    //           setTimeout(() => {
    //             navigation.navigate("HomeNavigation")
    //           }, 1000);
    //         } catch (error) {
    //           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //           } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (e.g. sign in) is in progress already
    //           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //           } else {
    //             // some other error happened
    //           }
    //         }
    //       };
    // }

    return(
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo resizeMode = "cover" source = {require("../assets/img/img1_removebg.png")}/>
                    <PageTitle>Extinguisher Hub</PageTitle>
                    <SubTitle>Employee Login</SubTitle>

                    <Formik
                        initialValues={{email: "",password: ""}}
                        onSubmit={(values, {setSubmitting})=>{
                            if(values.email == ''|| values.password==''){
                                handleMessage("Please fill out all fields")
                                setSubmitting(false)
                            }else{
                                handleLogin(values,setSubmitting)
                            }
                        }}
                    >
                        {
                            ({handleChange,handleBlur,handleSubmit, values,isSubmitting})=>
                            <StyledFormArea>
                                <MyTextInput
                                    label= "Email Address"
                                    icon= "mail"
                                    placeholder = "andyj@gmail.com"
                                    placeholderTextColor = {darkLight}
                                    onChangeText = {handleChange("email")}
                                    onBlur = {handleBlur("email")}
                                    value = {values.email}
                                    keyboardType = "email-address"
                                />
                                <MyTextInput
                                    label= "Password"
                                    icon= "lock"
                                    placeholder = "* * * * * * * *"
                                    placeholderTextColor = {darkLight}
                                    onChangeText = {handleChange("password")}
                                    onBlur = {handleBlur("password")}
                                    value = {values.password}
                                    secureTextEntry = {hidePassword}
                                    isPassword = {true}
                                    hidePassword = {hidePassword}
                                    setHidePassword = {setHidePassword}
                                />
                                <MsgBox type={messageType}>{message}</MsgBox>
                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>}
                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size={'large'} color={primary}/>
                                </StyledButton>}
                                <Line/>
                                <StyledButton google={true} onPress={handleSubmit}>
                                    <Fontisto name='google' color={primary} size={25} />
                                    <ButtonText google={true}>Sign in with Google</ButtonText>
                                </StyledButton>
                                <ExtraView>
                                    <ExtraText>Don't Have an account already? </ExtraText>
                                <TextLink onPress = {()=> navigation.navigate("EmployeeSignup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        }
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {
                isPassword && (
                    <RightIcon onPress={()=>{setHidePassword(!hidePassword)}}>
                        <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
                    </RightIcon>
                )
            }   
        </View>
    )
}

export default Login