# Install prometheus
helm install prometheus stable/prometheus --namespace prometheus

# Install ingress router
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.42.0/deploy/static/provider/cloud/deploy.yaml

# Install cert-manager
kubectl create namespace cert-manager
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.1.0  --set installCRDs=true

# Install teamoperator and teammembers
kubectl create namespace digital-team-app
kubectl apply -f digitalteam.yaml -n digital-team-app

# To delete the digital team run
# kubectl delete -f digitalteam.yaml -n digital-team-app