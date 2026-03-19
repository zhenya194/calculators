while True:
    task:str = input("Write task: ")
    if task.lower() == "exit":
        break
    else:
        answer = eval(task)
    print(answer)
