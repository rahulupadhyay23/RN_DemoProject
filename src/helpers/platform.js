import { Platform } from "react-native";

function getOS(){
    return Platform.OS
}

export function isPlatformiOS(){
    return getOS() === 'ios';
}

export function isPlatformAndroid(){
    return getOS() === 'android';
}