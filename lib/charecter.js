function frontMouth(x, y) {
	stroke(0);
	ellipse(x - 6, y - 25, 1, 2)
	ellipse(x + 6, y - 25, 1, 2)
	line(x - 6, y - 25, x - 4, y - 22)
	line(x - 4, y - 22,x + 4, y - 22)
	line(x + 4, y - 22,x + 6, y - 25)
}

function frontEyes(x, y) {
	fill(255)
	ellipse(x, y - 36, 18, 12)
	fill(0)    
	ellipse(x, y - 34, 9, 7)
 
}

function drawBody(x, y) {
	push()
	fill(137,213,96)
	ellipse(x, y - 32, 26, 34)
	pop()
	
}

function drawCharecter(x, y) {
	push()
	function hand (x, y, isFlipped) {
			p1 = isFlipped ? 11 : -11
			p2 = isFlipped ? 13 : -13
			p3 = isFlipped ? 14 : -14

			line(x + p1, y - 24, x + p2, y - 20)
			line(x + p2, y - 20, x + p3, y - 12)
	}
	
	function leg (x, y, isFlipped) {
			p1 = isFlipped ? 6 : -6
			p2 = isFlipped ? 2 : -2
			p3 = isFlipped ? 5 : -5

			ellipse(x + p1, y + 1, 4, 1)
			line(x + p2, y - 15, x + p3, y - 6)
			line(x + p3, y - 6, x + p3, y)
	}

	drawBody(x, y)
	frontEyes(x, y)    
	frontMouth(x, y)

	push()
	strokeWeight(2)    
	stroke(82, 129, 54); // dark green
	fill(0, 0, 255);
	
	hand(x, y)
	leg(x, y)

	hand(x, y, true)
	leg(x, y, true)
	
	pop()
	pop()
}
