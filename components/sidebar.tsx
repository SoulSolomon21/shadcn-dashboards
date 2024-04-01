"use client"

import Link from "next/link";
import {Brain, CalendarDays, Home, Settings} from "lucide-react";
import {NavItem} from "@/types";
import {Tooltip, TooltipContent, TooltipTrigger,} from "@/components/ui/tooltip"
import {usePathname} from "next/navigation";
import React from "react";

const navItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        title: "Appointments",
        href: "#",
        icon: CalendarDays
    }
]

function Sidebar() {
    const pathName = usePathname()

    //TODO: refactor link styling logic
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href={"#"}
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Brain className="h-4 w-4 transition-all group-hover:scale-110"/>
                    <span className="sr-only">MindPeace</span>
                </Link>
                {
                    navItems.map((item, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${pathName.includes(`/dashboard${item.href}`) ? "bg-accent" : undefined}`}
                                >
                                    <item.icon className="h-5 w-5"/>
                                    <span className="sr-only">{item.title}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side={"right"}>{item.title}</TooltipContent>
                        </Tooltip>
                    ))
                }
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5"/>
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}

export default Sidebar