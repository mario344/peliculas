import React,{useState,useMemo} from 'react';

import {StatusBar} from 'react-native';

import { DefaultTheme,Button,DarkTheme as DarkThemePaper,DefaultTheme as DefaultThemePaper ,Provider as PaperProvider } from 'react-native-paper';

import {NavigationContainer,DarkTheme as DarkThemeNavigation,DefaultTheme as DefaultThemeNavigation} from '@react-navigation/native'

import Navigation from './src/navigation/Navigation'

import PreferencesContext from './src/context/PreferencesContext'

export default function App(){

  const [theme, settheme] = useState("dark")

  DefaultThemePaper.colors.primary ="#1ae1f2";
  DarkThemePaper.colors.primary="#1ae1f2";
  DarkThemePaper.colors.accent="#1ae1f2";

  DarkThemeNavigation.colors.background ="#192734";

  DarkThemeNavigation.colors.card="#15212b"


const toggleTheme = ()=>{

  settheme(theme === "dark" ? "light" : "dark")
}
  
  const preference = useMemo(
    ()=>({
      toggleTheme,
      theme
    }),
    [theme]
  )
 
  return(

    <PreferencesContext.Provider value={preference}>

      <PaperProvider theme={theme === "dark"? DarkThemePaper : DefaultThemePaper}>

      
      <StatusBar barStyle={theme === "dark" ? "light-content" : "light-content"}/>
          <NavigationContainer theme={theme === "dark" ? DarkThemeNavigation : DefaultThemeNavigation }>

            <Navigation/>

          </NavigationContainer>
        </PaperProvider>

    </PreferencesContext.Provider>

  )
  
}