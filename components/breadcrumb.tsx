"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {usePathname} from "next/navigation";

function BreadcrumbComponent() {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join("/")}`
                        let itemLink = link[0].toUpperCase() + link.slice(1, link.length)

                        return (
                            <div className="inline-flex items-center gap-1.5" key={index}>
                                <BreadcrumbItem>
                                    {paths === href ? (
                                        <BreadcrumbPage>
                                            {itemLink}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{itemLink}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {pathNames.length !== index + 1 && <BreadcrumbSeparator/>}
                            </div>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent