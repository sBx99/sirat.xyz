// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: "Sirat Baweja",
        moreInfo: "check out my gh or li",
        website: "https://sirat.xyz",
    });
};
