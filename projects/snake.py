
import turtle
import time
import random

delay = 0.1

#score counter
score = 0
high_score = 0

#screen setup
window = turtle.Screen()
window.title("Sami's Snake Game")
window.bgcolor("paleturquoise")
window.setup(width=600, height=600)
window.tracer(0)

#snake head
head = turtle.Turtle()
head.speed(0)
head.shape("square")
head.color("darkorchid")
head.penup()
head.goto(0,0)
head.direction = "stop"

#snake food
food = turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("tomato")
food.penup()
food.goto(0,100)

segments = []

#trail
trail = turtle.Turtle()
trail.speed(0)
trail.shape("square")
trail.color("white")
trail.penup()
trail.hideturtle()
trail.goto(0, 260)
trail.write("Score: 0  High Score: 0", align="center", font=("Verdana", 24, "normal"))

#functions for changing direction
def go_up():
    if head.direction != "down":
        head.direction = "up"

def go_down():
    if head.direction != "up":
        head.direction = "down"

def go_left():
    if head.direction != "right":
        head.direction = "left"

def go_right():
    if head.direction != "left":
        head.direction = "right"

def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)

    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)

    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)

    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)

#keyboard setup
window.listen()
window.onkey(go_up, "w")
window.onkey(go_down, "s")
window.onkey(go_left, "a")
window.onkey(go_right, "d")

#main game loop
while True:
    window.update()

    #checks for a collision with the border
    if head.xcor()>290 or head.xcor()<-290 or head.ycor()>290 or head.ycor()<-290:
        time.sleep(1)
        head.goto(0,0)
        head.direction = "stop"

        #hides the segments
        for segment in segments:
            segment.goto(1000, 1000)
        
        #clears the segments list
        del segments[:]

        #resets the score
        score = 0

        #resets the delay
        delay = 0.1

        trail.clear()
        trail.write("Score: {}  High Score: {}".format(score, high_score), align="center", font=("Courier", 24, "normal")) 


    #checks for a collision with the food
    if head.distance(food) < 20:
        #moves the food to a random spot
        x = random.randint(-290, 290)
        y = random.randint(-290, 290)
        food.goto(x,y)

        #adds a segment
        new_segment = turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")
        new_segment.penup()
        segments.append(new_segment)

        #shortens the delay
        delay -= 0.001

        #increases the score
        score += 10

        if score > high_score:
            high_score = score
        
        trail.clear()
        trail.write("Score: {}  High Score: {}".format(score, high_score), align="center", font=("Courier", 24, "normal")) 

    #moves the end segments first in reverse order
    for index in range(len(segments)-1, 0, -1):
        x = segments[index-1].xcor()
        y = segments[index-1].ycor()
        segments[index].goto(x, y)

    #moves segment 0 to where the head is
    if len(segments) > 0:
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x,y)

    move()    

    #checks for head collision with the body segments
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0,0)
            head.direction = "stop"
        
            #hides the segments
            for segment in segments:
                segment.goto(1000, 1000)
        
            #clears the segments list
            del segments[:]

            #resets the score
            score = 0

            #resets the delay
            delay = 0.1
        
            #updates the score display
            trail.clear()
            trail.write("Score: {}  High Score: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))

    time.sleep(delay)

window.mainloop()