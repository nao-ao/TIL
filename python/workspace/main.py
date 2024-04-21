from datetime import datetime

import pytz


def main():
    print("Hello World!")


if __name__ == "__main__":

    start = datetime.now(pytz.timezone("Asia/Tokyo"))
    print()
    print("Train Started at {}".format(start))
    print()
    main()
    print()

    print("Train Started at {}".format(start))
    finish = datetime.now(pytz.timezone("Asia/Tokyo"))
    print("Train Finished at {}".format(finish))
    print("Elapsed Time: {}".format(finish - start))
