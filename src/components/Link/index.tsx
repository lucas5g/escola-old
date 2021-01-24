import NextLink from 'next/link'

function Link({href, children, ...props}){
    return (
        <NextLink href={href} passHref>
            <a>
                {children}
            </a>
        </NextLink>
    )
}
export default Link