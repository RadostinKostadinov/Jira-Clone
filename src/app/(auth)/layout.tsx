"use client";

import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    const pathname = usePathname();

    return(
        <div className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                        <Image src="/logo.svg" height={50} width={50} alt="Logo"/>
                        <Button asChild variant="secondary">
                            <Link  href={pathname === '/sign-in' ? "/sign-up" : "/sign-in"}>
                                {pathname === '/sign-in' ? "Sign Up" : "Login"}
                            </Link>
                        </Button>
                </nav>
                <div className="flex flex-col items-center justify-between pt-4 md:pt-14">
                {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;