/* heart.css */

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #1a103d, #3a2a77, #2c254a);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#top-bar {
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px; 
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
}

.discord-connect {
  background: #7289da;
  color: #fff;
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 0 15px #7289da;
  transition: 0.3s;
}
.discord-connect:hover {
  background: #99aab5;
  box-shadow: 0 0 20px #99aab5;
}

#landing {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  text-align: center;
  z-index: 100;
  position: relative;
}

#pfp-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 1.2s ease-in-out;
  box-shadow: 0 0 15px #a084dc;
  position: relative;
}

#pfp {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  cursor: pointer;
}

#her-name {
  font-size: 1.8rem;
  color: #a084dc;
  text-shadow: 0 0 10px #a084dc;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 1.2s ease;
  font-weight: bold;
  display: none;
}

.center-quote {
  font-size: 2rem;
  text-align: center;
  margin: 100px 0 40px;
  color: #fff;
  text-shadow: 0 0 10px #fff;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #fff, 0 0 20px #7f5af0; }
  to { text-shadow: 0 0 20px #fff, 0 0 30px #72f6ff; }
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 30px 5vw;
}

.card {
  width: 320px;
  padding: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 25px rgba(114, 246, 255, 0.2);
  position: relative;
  opacity: 0;
  transform: translateY(50px) rotateZ(var(--tilt));
  animation: floatUp 1s forwards;
}

.card:nth-child(odd) {
  animation-delay: 0.3s;
  --tilt: -2deg;
}
.card:nth-child(even) {
  animation-delay: 0.6s;
  --tilt: 2deg;
}

@keyframes floatUp {
  to {
    transform: translateY(0) rotateZ(0);
    opacity: 1;
  }
}

.card h2 {
  color: #72f6ff;
  margin-bottom: 15px;
  text-shadow: 0 0 8px #72f6ff;
}

.card p {
  color: #ddd;
  font-size: 0.95rem;
}

.hover-img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 0 10px #00000055;
}

.hover-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #72f6ff;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
  margin-top: 10px;
}

footer {
  background: #111;
  color: #ccc;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

footer .icon {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

footer .icon:hover {
  transform: scale(1.1);
}
