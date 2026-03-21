from simpleeval import simple_eval

while True:
    task:str = str(input("Write task: "))
    if task.lower() == "exit" or task.lower() == "stop":
        break
    else:
        answer = simple_eval(task)
    print(answer)
