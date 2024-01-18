function computeJointDistribution(data1, data2, numIntervals1, numIntervals2) {
            
            const intervals1 = createIntervals(data1, numIntervals1);
            const intervals2 = createIntervals(data2, numIntervals2);
          
            
            const jointDistribution = countFrequencies(data1, data2, intervals1, intervals2);
          
            return jointDistribution;
          }
          
          function createIntervals(data, numIntervals) {
            const min = Math.min(...data);
            const max = Math.max(...data);
            const intervalSize = (max - min) / numIntervals;
            const intervals = [];
          
            for (let i = 0; i < numIntervals; i++) {
              intervals.push({ min: min + i * intervalSize, max: min + (i + 1) * intervalSize });
            }
          
            return intervals;
          }
          
          function countFrequencies(data1, data2, intervals1, intervals2) {
            const jointDistribution = {};
          
            for (let i = 0; i < intervals1.length; i++) {
              for (let j = 0; j < intervals2.length; j++) {
                const count = data1.filter((x, index) => x >= intervals1[i].min && x <= intervals1[i].max && data2[index] >= intervals2[j].min && data2[index] <= intervals2[j].max).length;
                jointDistribution[`Interval${i + 1} x Interval${j + 1}`] = count;
              }
            }
          
            return jointDistribution;
          }