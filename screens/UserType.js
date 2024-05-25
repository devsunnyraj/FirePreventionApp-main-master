import React,{useState} from 'react'

import { Text,StyleSheet } from 'react-native'

import { StatusBar } from 'expo-status-bar';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledText,
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
    TextLinkContent,
    LowerFooterUserType,
    CopyrightFooter
} from '../components/style'

import { useFonts } from 'expo-font'

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const items = [
    {label : "Employee", value : 0},
    {label: "S.O.S. services", value : 1},
    {label : "Nearby Peoples", value : 2}
]

const {brand} = Colors;

const UserType = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        'Dancing-Script': require('../assets/static/DancingScriptRegular.ttf'),
    });

    const [value, setValue] = useState(0)

    const handleSubmit = ()=>{
        if(value == 0){
            navigation.navigate("EmployeeLogin")
        }else if(value == 1){
            navigation.navigate("SosLogin")
        }else{
            navigation.navigate("PeopleLogin")
        }
    }
                        
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                    <PageLogo resizeMode = "cover" source = {require("../assets/img/img1_removebg.png")}/>
                    <PageTitle>Extinguisher Hub</PageTitle>
                    <SubTitle>Select Your Account Type</SubTitle>

                    <InnerContainer>
                        <RadioForm>
                            {
                                items.map((obj,index)=> (
                                    <RadioButton key={index}>
                                        <RadioButtonInput
                                            obj={obj}
                                            index={index}
                                            isSelected={index === value}
                                            onPress={value => setValue(value)}
                                            buttonOuterSize={30}
                                            buttonWrapStyle={{marginLeft: 10,marginBottom:10}}
                                            buttonInnerColor={index === value ? "green" : "red"}
                                            borderRadius = {50}
                                            buttonOuterColor={index === value ? "green" : "red"}
                                        />
                                        <RadioButtonLabel
                                            obj={obj}
                                            index={index}
                                            labelHorizontal={true}
                                            onPress={value => setValue(value)}
                                            labelStyle={{fontSize: 20,color : index === value ? 'green' : "red"}}
                                            labelWrapStyle={{}}
                                        />
                                    </RadioButton>
                                    
                                ))
                            }
                        </RadioForm>
                        <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Login
                        </ButtonText>
                        </StyledButton>
                        <LowerFooterUserType>
                        <Text style={styles.StyledText}>Your Safety , Our Priority !</Text>
                        <CopyrightFooter>Copyright&copy; 2024</CopyrightFooter>
                        </LowerFooterUserType>
                        </InnerContainer>
                </InnerContainer>
        </StyledContainer>
    )
}

export default UserType

const styles = StyleSheet.create({
    StyledText:{
        fontSize : 30,
        textAlign : "center",
        color : brand,
        padding : 10,
        fontFamily : "Dancing-Script",
    }
})