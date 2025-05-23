const copy = async () => {
    // Write your code here 
    const { cp } = await import('node:fs/promises');
    const pathFrom = './src/fs/files'
    const pathTo = './src/fs/files_copy'
    try {
        await cp(pathFrom, pathTo, { recursive: true, force: false, errorOnExist: true})
        console.log('All files copied: ', pathFrom, pathTo)
    } catch (error) {
        throw new Error('FS operation failed', { cause: error.message })
    }
};

await copy();
