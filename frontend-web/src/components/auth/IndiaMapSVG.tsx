export default function IndiaMapSVG() {
  return (
    <svg
      viewBox="0 0 800 900"
      className="w-full h-full opacity-10"
      fill="currentColor"
    >
      {/* Simplified India Map */}
      <path
        d="M 400 100 
           L 450 120 L 480 140 L 500 180 L 520 220 L 530 260 
           L 540 300 L 545 340 L 548 380 L 550 420 
           L 548 460 L 545 500 L 540 540 L 530 580 
           L 515 620 L 495 650 L 470 680 L 440 700 
           L 410 710 L 380 715 L 350 710 L 320 700 
           L 290 680 L 265 650 L 245 620 L 230 590 
           L 220 560 L 215 530 L 212 500 L 210 470 
           L 212 440 L 215 410 L 220 380 L 230 350 
           L 245 320 L 260 290 L 280 260 L 305 230 
           L 330 200 L 355 170 L 380 140 L 400 100 Z
           
           M 490 110 L 510 115 L 530 125 L 545 140 L 550 155 
           L 545 170 L 530 180 L 510 185 L 490 180 
           L 475 170 L 470 155 L 475 140 L 490 110 Z
           
           M 250 750 L 270 770 L 290 785 L 310 795 L 330 800 
           L 350 795 L 370 785 L 390 770 L 410 750 
           L 420 730 L 425 710 L 420 690 L 410 675 
           L 390 665 L 370 660 L 350 655 L 330 660 
           L 310 665 L 290 675 L 270 690 L 260 710 
           L 255 730 L 250 750 Z"
        className="text-blue-600"
      />
      
      {/* Additional state outlines for detail */}
      <circle cx="400" cy="300" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="350" cy="400" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="450" cy="350" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="380" cy="500" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="420" cy="450" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="320" cy="550" r="3" className="text-orange-500" opacity="0.6" />
      <circle cx="400" cy="600" r="3" className="text-orange-500" opacity="0.6" />
      
      {/* Decorative elements */}
      <path 
        d="M 200 200 Q 250 250 200 300" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        className="text-blue-400" 
        opacity="0.3"
      />
      <path 
        d="M 600 250 Q 550 300 600 350" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        className="text-orange-400" 
        opacity="0.3"
      />
    </svg>
  );
}
