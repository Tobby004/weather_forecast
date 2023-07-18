import pandas as pd
import json

# read the csv file
df = pd.read_csv('cities-reduce.csv')  # replace 'file.csv' with the name of your csv file

# convert the dataframe to a JSON string
json_string = df.to_json(orient='records')

# parse the JSON string into a list of dictionaries
data = json.loads(json_string)

# write the list of dictionaries to a JSON file
with open('cities_file.json', 'w') as f:
    json.dump(data, f, indent=4)  # use indent to make the file human-readable

