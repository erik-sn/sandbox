import * as React from 'react';

interface IProps {
  fill?: string;
}

const Lock = ({ fill }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 512 512">
    <path fill={fill || 'white'} d="M296 224h-8v-96c0-52.935-43.065-96-96-96h-64c-52.935 0-96 43.065-96 96v96h-8c-13.2 0-24 10.8-24 24v240c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-240c0-13.2-10.8-24-24-24zM96 128c0-17.645 14.355-32 32-32h64c17.645 0 32 14.355 32 32v96h-128v-96z"/>
  </svg>
);

export default Lock;