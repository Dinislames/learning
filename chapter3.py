# Программа Кости. Симуляция игральных костей, выполненных в виде 6-гранных кубов
# Создаем случайные числа, в диапазоне от 1 до 6
import random
"""

die1 = random.randint(1, 6)
die2 = random.randrange(6) + 1 # Возвращает случайное число в дипазоне от [0,n)! 
total = die1 + die2
print("При вашем броске выпало: ", die1, "и", die2, "очков в сумме", total)

"""
#--------------------------------------------------------------------------------
# Программа для проверки правильности пароля
"""

print("Добро пожловать в городо Отсоcity! Для входа Вам необходимо ввести пароль")
password = input("Введите пароль: ")
if password == "secret":
    print("Доюро пожаловать в наш чудесный город!")
else:
    print("Шли бы Вы отсюда, петушок")

"""
#--------------------------------------------------------------------------------
# Программа, датчик настроения
#print("По вашей энергетике, а точнее по тем числам, что сгенерит функция randint() модуля random, я определю ваше настроение")
#print("Ваше настроение...")
#mood = random.randint(1, 3)
#if mood == 1:
    #print(\
        #"""
          #  ---------
          #  | 0   0 |
          #  |   <   |
          #  | .    .|
          #  |  .... |
          #  ---------

        #""")
#elif mood == 2:
#    print( \
#        """
#            ---------
#            | 0   0 |
#            |   <   |
#            |       |
#            ---------
#
#        """)
#else:
#    print("Хуевое :(")
#-----------------------------------------------------------------
# Цикл while, а примере симулятора трехлетнего ребенка
"""
print("Имитация разговора с 3-х летним ребенком, хотя откуда мне знать о том, что думает 3-х летний ?!!")
respone = " "
while respone != "Потому, что.":
    respone = input("Почему ?\n")
print("А, ладно")
"""
#-----------------------------------------------------------------
# Программа, проигранное сражение
"""
print("Наша корабль окружен!")
print("Большим количесвтом невыполненных, задач. Deadlin-ы горят! Кажется нам пизд...")
print(" Но мы должны сражаться, приготовиться к бою!!!")
health = 10
deadlines = 1
damage = 1
while health > 0:
    deadlines += 1
    health -= damage;
    print("Батарея огонь!")
print("Сэр, наша жопа воспламенилась, нам конец (((")
"""
#------------------------------------------------------------------
# Программа, метродотель
"""
print("Добро пожаловать, в 9-ый х@й с солью!")
print("К сожалению все столики, заняты.")
money = int(input("Сколько вы готовы дать метродотелю на чай ?"))
if money: # сама переменная, является условием!!! Помни, что логически ложен только 0!!!
    print("Сейчас мы найдем, для Вас столик!")
else:
    print("К сожалению все столики заняты, придется подождать")
"""
#--------------------------------------------------------------------
# Программа приверидливая считалка. Она не любит число 5 и категорически не хочет его воспринимать
"""
count = 0
while True:
    count += 1
    if count > 10:
        break
    if count == 5:
        continue
    print(count)
"""
#--------------------------------------------------------------------
# Программа отгадай число
"""
compNumber = random.randint(1, 100)
guessNumber = int(input("Ваше предположение: "))
tries = 1
while guessNumber != compNumber:
    if guessNumber > compNumber:
        print("Меньше...")
    else:
        print("Больше...")
    guessNumber = int(input("Ваше предположение: "))
    tries += 1
print("Поздравляю Вы, отгадали число: ", compNumber)
print("У вас ушло на это ", tries, " попыток")
"""
#--------------------------------------------------------------------
#Задачи в конце главы

"""

1 - симуляция игры орел/решка. Прога "подюрасывает монету" 100 раз, и говорит сколько раз выпала решка а сколько орел

"""
"""

count = 1
eagle = 0
coin = 0
while count <= 100:
    throwCoin = random.randint(1, 2)
    if throwCoin == 1:
        eagle += 1
    else:
        coin += 1
    count += 1
print("По результатм бросков, количесвто выпавших орлов: ", eagle)
print("Количесвто выпавших решек: ", coin)

"""

#Модификация программы отгадай число, с возможностью проигрыша
"""
compNumber = random.randint(1, 100)
tries = 1
guessNumber = int(input("Ваше предположение: "))
while guessNumber != compNumber:
    if guessNumber > compNumber:
        print("Меньше...")
    else:
        print("Больше...")
    guessNumber = int(input("Ваше предположение: "))
    tries += 1
    if tries <= 7 and guessNumber == compNumber:
        print("Поздравляю Вы, отгадали число: ", compNumber)
        print("У вас ушло на это ", tries, " попыток")
        break
    elif tries > 7 and guessNumber != compNumber:
        print("Вы проиграли. Нужное число: ", compNumber)
        break
"""

#Игра угадай число но для компьютера
"""
userNumber = int(input("Введите число от 1 до 100: "))
compTries = 1
compNumber = random.randint(1, 100)
while compNumber != userNumber:
    compTries += 1
    compNumber = random.randint(1, 100)
print("Компьютеру потребовалось, ", compTries, "попыток, чтобы отгадать ваше число: ", compNumber)
"""

# Бинарный поиск. В главе этого нет, я еще это не пршел, (ну типа не прошел))
guest = int(input("Введите число от 0 до 100: "))
compNumberList = list(range(0, 101))
low = compNumberList[0]
high = len(compNumberList)-1
tries = 1
while low <= high:
    tries += 1
    mid = (low + high)//2
    predict = compNumberList[mid]
    if predict == guest:
        print("Ваше число", predict, guest)
        print("Я отгадал его за", tries, "попыток")
    if predict > guest:
        high = mid - 1
    else:
        low = mid + 1