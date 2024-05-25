import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import DateTimePicker from '@react-native-community/datetimepicker';

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

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

const {darkLight, brand, primary} = Colors;

import axios from 'axios';

import { View, TouchableOpacity,ActivityIndicator } from 'react-native';

const Signup = ({navigation}) => {
    const [message,setMessage] = useState()
    const [messageType,setMessageType] = useState()

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000,0,1))

    const [dob, setDob] = useState()

    const onChange = (event, selectedDate)=>{
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate)
        setDob(currentDate)
    }

    const showDatePicker = () =>{
        setShow(true)
    }


    const handleSignup = (credentials,setSubmitting) =>{
        handleMessage(null)
        const url = "http://loginserverfireprevention-env.eba-p4ftevhp.ap-south-1.elasticbeanstalk.com/user/signup";

        axios
        .post(url,credentials)
        .then((response)=>{
            const result = response.data;
            const {message,status,data}=result

            if(status !== "SUCCESS"){
                handleMessage(message,status)
            }else{
                navigation.navigate("EmployeeLogin")
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

    return(
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageTitle>Extinguisher Hub</PageTitle>
                    <SubTitle>Employee Singup</SubTitle>

                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        onChange={onChange}
                        />
                    )}

                    <Formik
                        initialValues={{name: "",email: "",password: "",dateOfBirth: "",confirmPassword: ""}}
                        onSubmit={(values,{setSubmitting})=>{
                            values={...values,dateOfBirth:dob}
                            if(values.email == ''|| values.password=='' || values.name == ''|| values.dateOfBirth=='' || values.confirmPassword=='' ){
                                handleMessage("Please fill out all fields")
                                setSubmitting(false)
                            }else if(values.password !== values.confirmPassword){
                                handleMessage("Passwords doesn't match ")
                                setSubmitting(false)
                            }
                            else{
                                handleSignup(values,setSubmitting)
                            }
                        }}
                    >
                        {
                            ({handleChange,handleBlur,handleSubmit, values,isSubmitting})=>
                            <StyledFormArea>
                                <MyTextInput
                                    label= "Full Name"
                                    icon= "person"
                                    placeholder = "Enter your name"
                                    placeholderTextColor = {darkLight}
                                    onChangeText = {handleChange("name")}
                                    onBlur = {handleBlur("name")}
                                    value = {values.name}
                                />
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
                                    label= "Date of Birth"
                                    icon= "calendar"
                                    placeholder = "YYYY - MM - DD"
                                    placeholderTextColor = {darkLight}
                                    onChangeText = {handleChange("dateOfBirth")}
                                    onBlur = {handleBlur("dateOfBirth")}
                                    value = {dob ? dob.toDateString() : ""}
                                    isDate = {true}
                                    editable = {false}
                                    showDatePicker = {showDatePicker}
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
                                                            <MyTextInput
                                    label= "Confirm Password"
                                    icon= "lock"
                                    placeholder = "* * * * * * * *"
                                    placeholderTextColor = {darkLight}
                                    onChangeText = {handleChange("confirmPassword")}
                                    onBlur = {handleBlur("confirmPassword")}
                                    value = {values.confirmPassword}
                                    secureTextEntry = {hideConfirmPassword}
                                    isConfirmPassword = {true}
                                    hideConfirmPassword = {hideConfirmPassword}
                                    setHideConfirmPassword = {setHideConfirmPassword}
                                />
                                <MsgBox type={messageType}>{message}</MsgBox>
                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Signup
                                    </ButtonText>
                                </StyledButton>}
                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size={'large'} color={primary}/>
                                </StyledButton>}
                                <Line/>
                                <ExtraView>
                                    <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress = {()=> navigation.navigate("EmployeeLogin")}>
                                    <TextLinkContent>Login</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword,isConfirmPassword, hidePassword,setHidePassword,hideConfirmPassword,setHideConfirmPassword,isDate,showDatePicker, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate  && <StyledTextInput {...props}/>}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>
                </TouchableOpacity>
            )}
            {
                isPassword && (
                    <RightIcon onPress={()=>{setHidePassword(!hidePassword)}}>
                        <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
                    </RightIcon>
                )
            }   
             {
                isConfirmPassword && (
                    <RightIcon onPress={()=>{setHideConfirmPassword(!hideConfirmPassword)}}>
                        <Ionicons name={hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
                    </RightIcon>
                )
            }  
        </View>
    )
}

export default Signup