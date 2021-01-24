import NextLink from 'next/link'

function Link({href, children}){
    return (
        <NextLink href={href}>
            <a>
                {children}
            </a>
        </NextLink>
    )
}
export default Link