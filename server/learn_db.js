db.sightings.aggregate([ 
    { $match:{species_common:"Eastern Bluebird"}}, 
    {
         $group: {
            _id:"$location.coordinateds",
            totalSightings:{$count:{}}
        }
    }
])
db.sightings.aggregate([{$project:{date:1,species_common: 1}}])

db.sightings.aggregate(
    [{$match:{species_common: 'Eastern Bluebird'}},{$set:{year:{$year:"$date"}}},{$match:{year:2022}},{$count:"total_number"}])