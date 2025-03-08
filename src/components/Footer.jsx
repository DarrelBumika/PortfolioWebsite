function Footer() {
    return (
        <footer className="w-full bg-blue">
            <div className="w-full bg-blue flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-40 py-10 gap-4 md:gap-0">
                <h1 className="hidden md:flex text-2xl font-extrabold text-white leading-none">ASHILPA <br /> DARREL <br /> BUMIKA</h1>
                <div className="flex gap-4 justify-center items-center">
                    <a href="https://www.linkedin.com/in/ashilpadarrel/" target="/"><img src="/assets/img/linkedin.png" alt="" className="w-8 h-8" /></a>
                    <a href="https://www.github.com/darrelbumika/" target="/"><img src="/assets/img/github.png" alt="" className="w-8 h-8" /></a>
                    <a href="https://www.instagram.com/aslpadarrell/" target="/"><img src="/assets/img/instagram.png" alt="" className="w-8 h-8" /></a>
                    <a href="https://www.fiverr.com/ashilpadarrel/" target="/"><img src="/assets/img/fiverr.png" alt="" className="w-8 h-8" /></a>
                    <a href="https://www.letterboxd.com/vexxz/" target="/"><img src="/assets/img/letterboxd.png" alt="" className="w-8 h-8" /></a>
                </div>
                <div className="flex flex-row md:flex-col items-end text-white text-xs md:text-base font-semibold gap-4 md:gap-0">
                    <a href="#home">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Me</a>
                </div>
            </div>
            <div className="w-full bg-black flex justify-center py-2">
                <h6 className="text-white text-xs">&#169; 2025 Ashilpa Darrel Bumika. All Right Reserved.</h6>
            </div>
        </footer>
    )
}

export default Footer;