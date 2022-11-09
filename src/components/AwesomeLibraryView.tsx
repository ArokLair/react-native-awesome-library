import React from 'react';
import {
    requireNativeComponent,
    ViewStyle,
  } from 'react-native';
  
  
  export interface Props {
    color: string;
    style: ViewStyle;
  };
  
  const ComponentName = 'AwesomeLibraryView';
  
  const AwesomeLibraryViewNative = requireNativeComponent<Props>(ComponentName);

  export function AwesomeLibraryView({ color,style, ...props }: Props){
        return (
            <AwesomeLibraryViewNative color={color} style={style} {...props}></AwesomeLibraryViewNative>
        );
  }