// name: ci-cd pipeline deploy to prod

// on:
//     push:
//      branches:
//       - DevBranch
// jobs:
//   deploy:
//     runs-on: ubuntu-latest
//     steps:
//     - name: Get Github action IP
//       id: ip
//       uses: haythem/public-ip@v1.2
      
//     - name: SSH into the Server
//       run: ssh -v -i ${{ secrets.SSH_KEY }} ubuntu@${{ secrets.HOST_IP }} -v
       
//     - name: Add Github Actions IP to Security group
//       run: |
//         aws ec2 authorize-security-group-ingress --group-name ${{ secrets.AWS_SG_NAME }} --protocol tcp --port 22 --cidr ${{ steps.ip.outputs.ipv4 }}/32    
//       env:
//         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
//         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//         AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}
        
//     - name: Deploy to prod server
//       uses: appleboy/ssh-action@master
//       with:
//         host: ${{ secrets.HOST_IP }}
//         username: ubuntu
//         key: ${{ secrets.SSH_KEY }}
//         script: |
//           export NVM_DIR=~/.nvm
//           source ~/.nvm/nvm.sh
//           cd /home/ubuntu/nodejs-ssl-server
//           git stash
//           git pull origin feature/github-action
//           npm install
//           pm2 restart nodejs-ssl-server
              
//     - name: Remove Github Actions IP from security group
//       run: |
//         aws ec2 revoke-security-group-ingress --group-name ${{ secrets.AWS_SG_NAME }} --protocol tcp --port 22 --cidr ${{ steps.ip.outputs.ipv4 }}/32
//       env:
//         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
//         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//         AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}
//       if: always()