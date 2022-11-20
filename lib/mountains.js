function mountains(x, y) {
    push()
    fill(100);
    triangle(x, y, x + 150, y - 182, x + 300, y);
    triangle(x - 50, y, x + 50, y - 102, x + 250, y);
    triangle(x - 50, y, x + 200, y - 152, x + 350, y)
    triangle(x - 50, y, x + 300, y - 72, x + 410, y);
    pop()
}