function clouds(x, y) {
	push()
    fill(255);
    ellipse(x, y, x - 50, y - 50);
    ellipse(x + 50, y, x - 50, y - 25);
    ellipse(x + 100, y, x - 50, y);
    ellipse(x + 170, y, x - 50, y - 30);
	pop()
}