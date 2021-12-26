import React from 'react';
import {PageErrorContainer} from './styles';

export const ErrorMessage = (props) => {
   const error = (
       <PageErrorContainer>
        {props.message || "Sorry something went wrong."}
       </PageErrorContainer>);

   return error;
}
