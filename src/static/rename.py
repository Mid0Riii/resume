import os

def batch_rename_files(path='.'):
    # 获取指定路径下的所有文件
    files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
    # 初始化文件编号
    file_number = 1
    for file in files:
        # 分离文件名和后缀
        file_name, file_extension = os.path.splitext(file)
        # 构造新文件名
        new_file_name = f"{file_number}{file_extension}"
        # 构造完整的旧文件路径和新文件路径
        old_file_path = os.path.join(path, file)
        new_file_path = os.path.join(path, new_file_name)
        # 重命名文件
        os.rename(old_file_path, new_file_path)
        # 文件编号递增
        file_number += 1

# 调用函数，可以传入一个路径
batch_rename_files('./series1/more/')