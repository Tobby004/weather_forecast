import json
import csv

# Load the data from the CSV file
with open('cities.csv', 'r') as file:
    reader = csv.DictReader(file)
    data = list(reader)

# Keep only the city, country, and admin_name (state) from each city
reduced_data = [{"city": city["city"], "country": city["country"], "state": city.get("admin_name", "")} for city in data]

# Write the reduced data back to a new JSON file
with open('cities.json_reduced.json', 'w') as file:
    json.dump(reduced_data, file)
