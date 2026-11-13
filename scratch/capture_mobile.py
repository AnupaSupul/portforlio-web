import subprocess, time, os, sys
from PIL import Image

def main():
    dist_dir = r"c:\Users\supul\OneDrive\Desktop\PF\portforlio-web\dist"
    artifact_dir = r"C:\Users\supul\.gemini\antigravity\brain\88e70019-b915-4794-a26e-a3081609bc58"
    
    server = subprocess.Popen(
        [sys.executable, "-m", "http.server", "8102", "--directory", dist_dir],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    time.sleep(2)
    
    chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    mobile_tall_path = os.path.join(artifact_dir, "mobile-tall-fullpage.png")
    
    # 390px width represents typical modern mobile screen (iPhone 12/13/14)
    subprocess.run([
        chrome, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--window-size=390,12000",
        f"--screenshot={mobile_tall_path}",
        "http://127.0.0.1:8102/"
    ], capture_output=True, text=True)
    
    server.terminate()
    
    if os.path.exists(mobile_tall_path):
        print(f"Captured: {mobile_tall_path} ({os.path.getsize(mobile_tall_path)} bytes)")
        im = Image.open(mobile_tall_path)
        w, h = im.size
        print(f"Full mobile size: {w}x{h}")
        
        # Crop slices for mobile report
        # Estimated offsets on 390px mobile
        slices = [
            ("mobile-hero-about.png", 0, 2200),
            ("mobile-techstack.png", 2200, 4200),
            ("mobile-projects-legalrag.png", 4200, 5600),
            ("mobile-projects-secondary.png", 5600, 7800),
            ("mobile-research.png", 7800, 9600),
            ("mobile-experience-edu.png", 9600, min(12000, h)),
        ]
        
        for name, top, bottom in slices:
            crop = im.crop((0, top, w, min(bottom, h)))
            out = os.path.join(artifact_dir, name)
            crop.save(out)
            print(f"Saved mobile slice: {name}")
    else:
        print("Failed to capture mobile screenshot")

if __name__ == "__main__":
    main()

