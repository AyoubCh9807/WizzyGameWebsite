from PIL import Image, PngImagePlugin

file_names = [
    "astrea",
    "banner",
    "grief",
    "logo",
    "megamox",
    "nightcoil",
    "raskhul",
    "sylra",
    "victor",
]

meta = PngImagePlugin.PngInfo()

meta.add_text("Author", "AyoubCh")
meta.add_text("Copyright", "© 2025 AyoubCh. All rights reserved.")

for name in file_names:

    img = Image.open(f"app/../public/{name}.png")
    

    img.save(f"app/../public/{name}.png", pnginfo=meta)

