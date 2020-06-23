import { NextComponentType } from 'next';

export type CustomNextComponentType = {
  getLayout?: (page: JSX.Element) => JSX.Element;
} & NextComponentType;

export enum MaterialIconType {
  Outlined = 'outlined',
  TwoTone = 'two-tone',
  Round = 'round',
  Sharp = 'sharp'
}
