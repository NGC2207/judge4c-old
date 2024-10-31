const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // 删除所有数据
  await prisma.evaluationResult.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.testCase.deleteMany();
  await prisma.constraint.deleteMany();
  await prisma.template.deleteMany();
  await prisma.problem.deleteMany();
  await prisma.user.deleteMany();
  
  // 创建一些用户
  const user1 = await prisma.user.create({
    data: {
      username: "user1",
      password: "password1",
      email: "user1@example.com",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "user2",
      password: "password2",
      email: "user2@example.com",
    },
  });

  // 创建问题：两数之和
  const problem1 = await prisma.problem.create({
    data: {
      title: "两数之和",
      description:
        "给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。",
      content:
        "你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。",
    },
  });

  // 创建问题：两数相加
  const problem2 = await prisma.problem.create({
    data: {
      title: "两数相加",
      description:
        "给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，每个节点只存储一个数字。将两数相加返回一个新的链表。",
      content: "你可以假设除了数字 0 之外，这两个数都不会以 0 开头。",
    },
  });

  // 创建模板
  const templates = [
    {
      language: "C",
      code: `#include <stdio.h>\n\nint* twoSum(int* nums, int numsSize, int target, int* returnSize){\n    // Your code here\n}\n`,
      problemId: problem1.id,
    },
    {
      language: "Java",
      code: `import java.util.HashMap;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}\n`,
      problemId: problem1.id,
    },
    {
      language: "C",
      code: `#include <stdio.h>\n\nstruct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){\n    // Your code here\n}\n`,
      problemId: problem2.id,
    },
    {
      language: "Java",
      code: `class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Your code here\n    }\n}\n`,
      problemId: problem2.id,
    },
  ];

  for (const template of templates) {
    await prisma.template.create({
      data: template,
    });
  }

  // 创建约束
  const constraints = [
    {
      language: "C",
      cpuLimit: 1000,
      memoryLimit: 128,
      problemId: problem1.id,
    },
    {
      language: "Java",
      cpuLimit: 2000,
      memoryLimit: 256,
      problemId: problem1.id,
    },
    {
      language: "C",
      cpuLimit: 1000,
      memoryLimit: 128,
      problemId: problem2.id,
    },
    {
      language: "Java",
      cpuLimit: 2000,
      memoryLimit: 256,
      problemId: problem2.id,
    },
  ];

  for (const constraint of constraints) {
    await prisma.constraint.create({
      data: constraint,
    });
  }

  // 创建测试用例
  const testCases = [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      problemId: problem1.id,
    },
    {
      input: "nums = [3, 2, 4], target = 6",
      output: "[1, 2]",
      problemId: problem1.id,
    },
    {
      input: "l1 = [2, 4, 3], l2 = [5, 6, 4]",
      output: "[7, 0, 8]",
      problemId: problem2.id,
    },
    {
      input: "l1 = [0], l2 = [0]",
      output: "[0]",
      problemId: problem2.id,
    },
  ];

  for (const testCase of testCases) {
    await prisma.testCase.create({
      data: testCase,
    });
  }

  // 创建答案
  const answers = [
    {
      language: "C",
      code: `#include <stdio.h>\n\nint* twoSum(int* nums, int numsSize, int target, int* returnSize){\n    for (int i = 0; i < numsSize; i++) {\n        for (int j = i + 1; j < numsSize; j++) {\n            if (nums[i] + nums[j] == target) {\n                int* result = (int*)malloc(2 * sizeof(int));\n                result[0] = i;\n                result[1] = j;\n                *returnSize = 2;\n                return result;\n            }\n        }\n    }\n    *returnSize = 0;\n    return NULL;\n}\n`,
      problemId: problem1.id,
    },
    {
      language: "Java",
      code: `import java.util.HashMap;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return null;\n    }\n}\n`,
      problemId: problem1.id,
    },
    {
      language: "C",
      code: `#include <stdio.h>\n\nstruct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){\n    struct ListNode* dummyHead = (struct ListNode*)malloc(sizeof(struct ListNode));\n    struct ListNode* p = l1, *q = l2, *curr = dummyHead;\n    int carry = 0;\n    while (p != NULL || q != NULL) {\n        int x = (p != NULL) ? p->val : 0;\n        int y = (q != NULL) ? q->val : 0;\n        int sum = carry + x + y;\n        carry = sum / 10;\n        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));\n        curr->next->val = sum % 10;\n        curr = curr->next;\n        if (p != NULL) p = p->next;\n        if (q != NULL) q = q->next;\n    }\n    if (carry > 0) {\n        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));\n        curr->next->val = carry;\n    }\n    return dummyHead->next;\n}\n`,
      problemId: problem2.id,
    },
    {
      language: "Java",
      code: `class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode dummyHead = new ListNode(0);\n        ListNode p = l1, q = l2, curr = dummyHead;\n        int carry = 0;\n        while (p != null || q != null) {\n            int x = (p != null) ? p.val : 0;\n            int y = (q != null) ? q.val : 0;\n            int sum = carry + x + y;\n            carry = sum / 10;\n            curr.next = new ListNode(sum % 10);\n            curr = curr.next;\n            if (p != null) p = p.next;\n            if (q != null) q = q.next;\n        }\n        if (carry > 0) {\n            curr.next = new ListNode(carry);\n        }\n        return dummyHead.next;\n    }\n}\n`,
      problemId: problem2.id,
    },
  ];

  for (const answer of answers) {
    await prisma.answer.create({
      data: answer,
    });
  }

  // 创建提交
  await prisma.submission.create({
    data: {
      user: {
        connect: { id: user1.id },
      },
      problem: {
        connect: { id: problem1.id },
      },
      language: "Java",
      code: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return null;\n    }\n}\n`,
      status: "Accepted",
    },
  });

  // 创建评估结果
  await prisma.evaluationResult.create({
    data: {
      submission: {
        connect: { id: (await prisma.submission.findFirst()).id },
      },
      passedCases: 2,
      totalCases: 2,
      timeUsed: 0.1,
      memoryUsed: 128,
      logs: "Logs for evaluation result",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
