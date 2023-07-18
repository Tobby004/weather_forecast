import csv

# Load the data from the CSV file and keep it open for the operation
with open('cities.csv', 'r') as input_file:  
    data = csv.DictReader(input_file)

    # Keep only the city, country, and admin_name (state) from each row
    reduced_data = [{"city": row["city"], "country": row["country"], "state": row.get("admin_name", "")} for row in data]

# Write the reduced data back to a new CSV file
with open('cities_reduced.csv', 'w') as output_file:  
    writer = csv.DictWriter(output_file, fieldnames=["city", "country", "state"])
    writer.writeheader()
    writer.writerows(reduced_data)

