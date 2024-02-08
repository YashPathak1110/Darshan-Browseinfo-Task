import React from 'react';
import "./RemoveDuplicates.css";
class RemoveDuplicates extends React.Component {
    removeDuplicates(nums) {
        if (nums.length === 0) {
            return [];
        }

        let k = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }

        nums.length = k;
        return nums;
    }

    render() {
        const nums = [1, 1, 2];
        const result = this.removeDuplicates([...nums]);

        return (
            <div>
                <p style={{marginLeft: "35rem"}}><b>Output: {result.length}, nums = [{result.join(', ')}]</b></p>
            </div>
        );
    }
}

export default RemoveDuplicates;
