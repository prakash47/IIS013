export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 bg-zinc-900 text-zinc-300 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-xl text-white">Roshni Foundation</h3>
                    <p className="text-sm mt-2">Empowering girls, transforming communities.</p>
                </div>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <div className="text-xs text-zinc-500">
                    © {new Date().getFullYear()} Roshni Foundation. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
