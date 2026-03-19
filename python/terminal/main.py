while True:
    task:str = input("Write task: ")
    if task.lower() == "exit" or task.lower() == "stop":
        break
    else:
        answer = eval(task)
    print(answer)
