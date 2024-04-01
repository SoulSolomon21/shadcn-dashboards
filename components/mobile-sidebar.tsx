"use client"

import Link from "next/link";
import {Brain, CalendarDays, Home, LineChart, PanelLeft,} from "lucide-react";
import {NavItem} from "@/types";
import {usePathname} from "next/navigation";
import React from "react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

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
    },
    {
        title: "Settings",
        href: "#",
        icon: LineChart
    }
]

function MobileSidebar() {
    const pathName = usePathname()

    //TODO: refactor link styling logic
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href={"#"}
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                        <Brain className="h-4 w-4 transition-all group-hover:scale-110"/>
                        <span className="sr-only">MindPeace</span>
                    </Link>
                    {
                        navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground ${pathName.includes(`/dashboard${item.href}`) ? "bg-accent" : undefined}`}
                            >
                                <item.icon className="h-5 w-5"/>
                                {item.title}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar