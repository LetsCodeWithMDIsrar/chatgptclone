import React, { createContext, useContext, useState } from 'react';

type CommonStateTypes = {
    isNavigationContextMenuOpen:boolean;
    setIsNavigationContextMenuOpen:(val:boolean)=>void
    navigationContextMenuPosition:positionTypes
    setNavigationContextMenuPosition:(val:positionTypes)=>void
}

type positionTypes = {
    x:number
    y:number
    absoluteX:number
    absoluteY:number
}

const CommonContext = createContext({} as any);
const CommonProvider = ({children}:{children:React.ReactNode}) => {
    const [isNavigationContextMenuOpen, setIsNavigationContextMenuOpen] = useState(false);
    const [navigationContextMenuPosition, setNavigationContextMenuPosition] = useState<positionTypes>({x:0,y:0,absoluteX:0, absoluteY:0});
  return (
    <CommonContext.Provider
    value={{
        isNavigationContextMenuOpen,
        setIsNavigationContextMenuOpen,
        navigationContextMenuPosition,
        setNavigationContextMenuPosition,
    }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const CommonState = ():CommonStateTypes=>{
    return useContext(CommonContext);
};

export default CommonProvider;
