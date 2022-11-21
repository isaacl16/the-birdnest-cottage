export const onClickRedirect = (link) => {
    window.open(link);
}

export const scrollToSection = (elementRef) => {
    // console.log(elementRef.current.offsetTop)
    window.scrollTo({
        top: elementRef.current.offsetTop - 70,
        behavior: 'smooth'
    })
}