import clsx from "clsx";
import { memo } from 'react';
import { PropsWithClassName } from "@/shared/types/common";

interface {{pascalCase}}Props extends PropsWithClassName {}

export const {{pascalCase}} = memo((props: {{pascalCase}}Props) => {
    const { 
        className, 
    } = props;
    return (
        <div className={clsx({{pascalCase}}, className)}>
            {{pascalCase}}
        </div>
    );
});