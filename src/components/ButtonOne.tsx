import React from 'react';
import {
    requireNativeComponent,
    ViewStyle,
  } from 'react-native';

  export interface Props {
    color: string;
    style: ViewStyle;
  };
  const ComponentName = 'ButtonOne';
  const ButtonOneNative = requireNativeComponent<Props>(ComponentName);

  export function ButtonOne({ color,style, ...props }: Props){
    return (
        <ButtonOneNative color={color} style={style} {...props}></ButtonOneNative>
    );
}