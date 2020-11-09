import json

with open('./test.json', 'r',encoding='utf-8') as fp:
    data = json.load(fp)
    print(data['code'])
